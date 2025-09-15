import React from "react";
import { Card, CardBody, Image } from "@heroui/react";
import { motion } from "framer-motion";

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">About <span className="text-primary">Fire Grill</span></h2>
          <div className="w-20 h-1 bg-secondary mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden border-none shadow-lg">
              <CardBody className="p-0">
                <Image
                  removeWrapper
                  alt="Fire Grill Restaurant Interior"
                  className="w-full h-full object-cover aspect-[6/7]"
                  src="assets/about.jpg"
                />
              </CardBody>
            </Card>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed">
              Fire Grill Asian Fusion Restaurant offers delicious tasting Asian Cuisine and Sushi Rolls in Downtown Charleston, SC. Our convenient location and affordable prices make our restaurant a natural choice for eat-in or take-out meals in the Charleston community.
            </p>
            <p className="text-lg leading-relaxed">
              Our restaurant is known for its variety in taste and high quality fresh ingredients. Come and experience our friendly atmosphere and excellent service.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-primary/10 p-4 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-primary mb-1">Fresh Ingredients</h3>
                <p className="text-sm">Locally sourced when possible</p>
              </div>
              <div className="bg-secondary/10 p-4 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-secondary mb-1">Vegan Options</h3>
                <p className="text-sm">Plant-based alternatives</p>
              </div>
              <div className="bg-primary/10 p-4 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-primary mb-1">Fusion Cuisine</h3>
                <p className="text-sm">Blend of Asian flavors</p>
              </div>
              <div className="bg-secondary/10 p-4 rounded-lg text-center">
                <h3 className="text-xl font-semibold text-secondary mb-1">Sushi Bar</h3>
                <p className="text-sm">Fresh rolls made to order</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};