import React from "react";
import { Card, CardBody, CardFooter, Button, Image } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
  isVegetarian?: boolean;
  isVegan?: boolean;
  isSpicy?: boolean;
}

export const MenuHighlights: React.FC = () => {
  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Spicy Tuna Roll",
      description: "Fresh tuna, spicy mayo, cucumber, and avocado",
      price: "$12.99",
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=3",
      category: "Sushi",
      isSpicy: true
    },
    {
      id: 2,
      name: "Pad Thai",
      description: "Rice noodles stir-fried with eggs, tofu, bean sprouts, and peanuts",
      price: "$14.99",
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=4",
      category: "Noodles",
      isVegetarian: true
    },
    {
      id: 3,
      name: "Korean BBQ Short Ribs",
      description: "Marinated beef short ribs grilled to perfection",
      price: "$18.99",
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=5",
      category: "Grill"
    },
    {
      id: 4,
      name: "Vegetable Tempura",
      description: "Assorted vegetables lightly battered and fried",
      price: "$10.99",
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=6",
      category: "Appetizers",
      isVegan: true,
      isVegetarian: true
    },
    {
      id: 5,
      name: "Mango Sticky Rice",
      description: "Sweet sticky rice with fresh mango and coconut cream",
      price: "$8.99",
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=7",
      category: "Dessert",
      isVegetarian: true,
      isVegan: true
    },
    {
      id: 6,
      name: "Kung Pao Chicken",
      description: "Stir-fried chicken with peanuts, vegetables, and chili peppers",
      price: "$15.99",
      image: "https://img.heroui.chat/image/food?w=400&h=300&u=8",
      category: "Main",
      isSpicy: true
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="menu" className="py-20 bg-content2">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Menu <span className="text-secondary">Highlights</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto text-foreground-500">
            Explore our most popular dishes, featuring a fusion of flavors from across Asia
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {menuItems.map((item) => (
            <MenuItem key={item.id} item={item} />
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Button 
            color="primary" 
            size="lg"
            className="font-medium"
            endContent={<Icon icon="lucide:arrow-right" />}
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

const MenuItem: React.FC<{ item: MenuItem }> = ({ item }) => {
  return (
    <motion.div variants={item} className="menu-item-hover">
      <Card className="overflow-hidden shadow-md">
        <CardBody className="p-0">
          <Image
            removeWrapper
            alt={item.name}
            className="w-full h-48 object-cover"
            src={item.image}
          />
          <div className="p-4">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <span className="text-secondary font-medium">{item.price}</span>
            </div>
            <p className="text-sm text-foreground-500 mb-3">{item.description}</p>
            <div className="flex gap-2">
              <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                {item.category}
              </span>
              {item.isVegetarian && (
                <span className="text-xs px-2 py-1 bg-success/10 text-success rounded-full">
                  Vegetarian
                </span>
              )}
              {item.isVegan && (
                <span className="text-xs px-2 py-1 bg-success/10 text-success rounded-full">
                  Vegan
                </span>
              )}
              {item.isSpicy && (
                <span className="text-xs px-2 py-1 bg-danger/10 text-danger rounded-full flex items-center gap-1">
                  <Icon icon="lucide:flame" className="text-xs" />
                  Spicy
                </span>
              )}
            </div>
          </div>
        </CardBody>
        <CardFooter className="border-t border-divider">
          <Button 
            color="secondary" 
            variant="flat" 
            className="w-full"
            startContent={<Icon icon="lucide:plus" />}
          >
            Add to Order
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};