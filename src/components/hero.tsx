import React from "react";
import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const Hero: React.FC = () => {
  return (
    <section className="hero-gradient min-h-[85vh] flex items-center justify-center text-white relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70"></div>
      <div className="container mx-auto px-4 py-24 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-primary">Fire</span> <span className="text-secondary">Grill</span>
            <span className="block mt-2">Asian Fusion</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-100">
            Experience the perfect blend of traditional Asian flavors with modern culinary techniques in Downtown Charleston.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              color="primary" 
              size="lg"
              className="font-medium"
              startContent={<Icon icon="lucide:utensils" />}
            >
              View Our Menu
            </Button>
            <Button 
              color="secondary" 
              size="lg"
              className="font-medium"
              startContent={<Icon icon="lucide:phone" />}
            >
              Order Now
            </Button>
          </div>
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="flex items-center">
              <Icon icon="lucide:star" className="text-yellow-400" />
              <span className="ml-1 font-medium">4.4</span>
            </div>
            <div className="h-4 border-r border-white/30"></div>
            <div>279 Reviews</div>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <a href="#about" aria-label="Scroll down">
            <Icon icon="lucide:chevron-down" className="text-white text-3xl" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};