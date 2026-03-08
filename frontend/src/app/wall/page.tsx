"use client";

import EternalCanvas from '@/components/wall/EternalCanvas';
import { useStore } from '@/store/useStore';
import { motion } from 'framer-motion';

export default function WallPage() {
    const { bond } = useStore();

    if (!bond) return null;

    return (
        <div className="flex-1 flex flex-col h-full bg-[#080808] overflow-hidden">
            {/* Minimalist Header for Canvas - Floating feel */}
            <div className="absolute top-0 left-0 right-0 z-20 px-6 py-8 pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center justify-between"
                >
                    <div className="glass bg-black/20 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/5">
                        <h1 className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">Eternal Wall</h1>
                    </div>
                </motion.div>
            </div>

            <EternalCanvas />
        </div>
    );
}
