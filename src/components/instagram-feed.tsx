import React from "react";
import { Card, CardBody, Image, Link, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface InstagramPost {
  id: number;
  imageUrl: string;
  likes: number;
  comments: number;
}

export const InstagramFeed: React.FC = () => {
  // Mock Instagram posts
  const instagramPosts: InstagramPost[] = [
    {
      id: 1,
      imageUrl: "https://img.heroui.chat/image/food?w=400&h=400&u=10",
      likes: 124,
      comments: 18
    },
    {
      id: 2,
      imageUrl: "https://img.heroui.chat/image/food?w=400&h=400&u=11",
      likes: 89,
      comments: 7
    },
    {
      id: 3,
      imageUrl: "https://img.heroui.chat/image/food?w=400&h=400&u=12",
      likes: 215,
      comments: 24
    },
    {
      id: 4,
      imageUrl: "https://img.heroui.chat/image/food?w=400&h=400&u=13",
      likes: 156,
      comments: 12
    },
    {
      id: 5,
      imageUrl: "https://img.heroui.chat/image/food?w=400&h=400&u=14",
      likes: 178,
      comments: 15
    },
    {
      id: 6,
      imageUrl: "https://img.heroui.chat/image/food?w=400&h=400&u=15",
      likes: 92,
      comments: 8
    },
    {
      id: 7,
      imageUrl: "https://img.heroui.chat/image/food?w=400&h=400&u=16",
      likes: 143,
      comments: 21
    },
    {
      id: 8,
      imageUrl: "https://img.heroui.chat/image/food?w=400&h=400&u=17",
      likes: 167,
      comments: 19
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Follow Us on <span className="text-secondary">Instagram</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="max-w-2xl mx-auto text-foreground-500">
            Stay updated with our latest dishes, events, and promotions
          </p>
        </div>
        
        <motion.div 
          className="instagram-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {instagramPosts.map((post) => (
            <InstagramPost key={post.id} post={post} />
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Button 
            as={Link}
            href="https://instagram.com"
            target="_blank"
            color="secondary" 
            variant="flat"
            size="lg"
            className="font-medium"
            startContent={<Icon icon="logos:instagram-icon" />}
          >
            Follow @FireGrillAsianFusion
          </Button>
        </div>
      </div>
    </section>
  );
};

const InstagramPost: React.FC<{ post: InstagramPost }> = ({ post }) => {
  // Add the item variant definition inside the InstagramPost component
  const item = {
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.4 } }
  };

  return (
    <motion.div variants={item}>
      <Card className="overflow-hidden shadow-sm">
        <CardBody className="p-0 relative group">
          <Image
            removeWrapper
            alt="Instagram post"
            className="w-full aspect-square object-cover"
            src={post.imageUrl}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <div className="flex gap-4 text-white">
              <div className="flex items-center">
                <Icon icon="lucide:heart" className="mr-1" />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center">
                <Icon icon="lucide:message-circle" className="mr-1" />
                <span>{post.comments}</span>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};