
import React, { useState, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Loader2, Sparkles, RefreshCw } from 'lucide-react';

interface GenerativeImageProps {
  prompt: string;
  aspectRatio?: "1:1" | "3:4" | "4:3" | "9:16" | "16:9";
  className?: string;
  fallbackImage?: string;
}

const GenerativeImage: React.FC<GenerativeImageProps> = ({ 
  prompt, 
  aspectRatio = "16:9", 
  className = "",
  fallbackImage = "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800"
}) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isAiGenerated, setIsAiGenerated] = useState(false);

  const generateImage = async () => {
    if (isLoading) return;
    setIsLoading(true);
    setError(null);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [
            {
              text: `Create a professional, high-end, futuristic tech image for a digital agency. Theme: ${prompt}. Style: Cinematic lighting, neon accents, clean composition, 8k resolution, photorealistic. No text in image.`,
            },
          ],
        },
        config: {
          imageConfig: {
            aspectRatio: aspectRatio,
          },
        },
      });

      let foundImage = false;
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          const base64Data = part.inlineData.data;
          setImageUrl(`data:image/png;base64,${base64Data}`);
          setIsAiGenerated(true);
          foundImage = true;
          break;
        }
      }

      if (!foundImage) {
        throw new Error("No image data returned from API");
      }
    } catch (err: any) {
      console.error("Image Generation Error:", err);
      if (err?.message?.includes('429') || err?.status === 'RESOURCE_EXHAUSTED') {
        setError("AI Quota Exhausted. Using Premium Fallback.");
      } else {
        setError("Synthesis failed. Using Premium Fallback.");
      }
      setImageUrl(fallbackImage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={`relative overflow-hidden group ${className}`}>
      <img 
        src={imageUrl || fallbackImage} 
        alt={prompt} 
        className={`w-full h-full object-cover transition-all duration-700 ${isLoading ? 'blur-md scale-105 opacity-50' : 'group-hover:scale-110'}`}
        referrerPolicy="no-referrer"
      />
      
      {isLoading && (
        <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4 z-20">
          <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
          <div className="text-[10px] font-black uppercase tracking-widest text-slate-900 animate-pulse bg-white/80 px-4 py-1 rounded-full backdrop-blur-sm">
            Synthesizing AI Visual...
          </div>
        </div>
      )}

      <div className="absolute top-4 right-4 z-10">
        {isAiGenerated ? (
          <div className="bg-black/40 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full flex items-center space-x-2">
            <Sparkles className="w-3 h-3 text-teal-400" />
            <span className="text-[9px] font-black text-white uppercase tracking-widest">AI Synthesized</span>
          </div>
        ) : (
          <div className="bg-white/10 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-[9px] font-black text-white uppercase tracking-widest">Premium Asset</span>
          </div>
        )}
      </div>

      {!isLoading && (
        <button 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            generateImage();
          }}
          className={`absolute bottom-4 right-4 z-10 px-4 py-2 bg-slate-900/80 backdrop-blur-md border border-white/20 rounded-xl text-white flex items-center space-x-2 transition-all hover:bg-blue-600 shadow-2xl ${isAiGenerated ? 'opacity-0 group-hover:opacity-100' : 'opacity-100 translate-y-2 group-hover:translate-y-0'}`}
        >
          {isAiGenerated ? <RefreshCw className="w-3 h-3" /> : <Sparkles className="w-3 h-3 text-teal-400" />}
          <span className="text-[10px] font-black uppercase tracking-widest">
            {isAiGenerated ? 'Regenerate' : 'AI Synthesize'}
          </span>
        </button>
      )}
      
      {error && (
        <div className="absolute bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-md text-teal-400 text-[8px] py-1.5 text-center font-black uppercase tracking-[0.2em] z-30 animate-in slide-in-from-bottom-full">
          {error}
        </div>
      )}
    </div>
  );
};

export default GenerativeImage;
