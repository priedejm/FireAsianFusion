import React from "react";
import { Card, CardBody, Avatar } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

interface Review {
  id: number;
  name: string;
  date: string;
  rating: number;
  comment: string;
  avatar: string;
}

export const Reviews: React.FC = () => {
  const reviews: Review[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      date: "August 15, 2023",
      rating: 5,
      comment: "The sushi here is absolutely amazing! Fresh ingredients and creative rolls. The service was also top-notch. Will definitely be back!",
      avatar: "https://img.heroui.chat/image/avatar?w=150&h=150&u=1"
    },
    {
      id: 2,
      name: "Michael Chen",
      date: "July 23, 2023",
      rating: 4,
      comment: "Great fusion of flavors. The Korean BBQ short ribs were tender and flavorful. The only reason for 4 stars is that it was a bit crowded when we went.",
      avatar: "https://img.heroui.chat/image/avatar?w=150&h=150&u=2"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      date: "September 5, 2023",
      rating: 5,
      comment: "As a vegetarian, I was thrilled with the options available. The vegetable tempura was crispy and not greasy at all. The staff was very accommodating with dietary restrictions.",
      avatar: "https://img.heroui.chat/image/avatar?w=150&h=150&u=3"
    },
    {
      id: 4,
      name: "David Thompson",
      date: "August 30, 2023",
      rating: 4,
      comment: "Excellent food and atmosphere. The pad thai had the perfect balance of sweet, sour, and savory. Would recommend for a nice dinner out in Charleston.",
      avatar: "https://img.heroui.chat/image/avatar?w=150&h=150&u=4"
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

  return (
    <section id="reviews" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Customer <span className="text-secondary">Reviews</span></h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <div className="flex items-center justify-center gap-1 mb-2">
            <Icon icon="lucide:star" className="text-yellow-400" />
            <Icon icon="lucide:star" className="text-yellow-400" />
            <Icon icon="lucide:star" className="text-yellow-400" />
            <Icon icon="lucide:star" className="text-yellow-400" />
            <Icon icon="lucide:star-half" className="text-yellow-400" />
            <span className="ml-2 font-medium">4.4</span>
          </div>
          <p className="max-w-2xl mx-auto text-foreground-500">
            Based on 279 reviews from our valued customers
          </p>
        </div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-flex items-center text-primary hover:underline font-medium"
          >
            See all 279 reviews
            <Icon icon="lucide:arrow-right" className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

const ReviewCard: React.FC<{ review: Review }> = ({ review }) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div variants={item}>
      <Card className="shadow-sm">
        <CardBody className="p-6">
          <div className="flex items-start gap-4">
            <Avatar
              src={review.avatar}
              size="lg"
              className="hidden sm:flex"
            />
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">{review.name}</h3>
                  <p className="text-xs text-foreground-500">{review.date}</p>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Icon 
                      key={i}
                      icon={i < review.rating ? "lucide:star" : "lucide:star"} 
                      className={i < review.rating ? "text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
              </div>
              <p className="mt-3 text-foreground-600">{review.comment}</p>
            </div>
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};