"use client"
import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { Home, Mail, Menu, Pen , X, Book } from "lucide-react"
import { GooeyFilter } from "@/components/ui/GooeyFilter"
import { Button } from "../ui/button"
const MENU_ITEMS = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Mail, label: "Contact" ,href: "/contact" },
  { icon: Book, label: "Projects", href: "/projects" },
  { icon: Pen, label: "Blog", href: "/blog" },
]

function GooeyDemo() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 z-50 right-12 h-12">
      <GooeyFilter id="gooey-filter-menu" strength={5} />
      <div
        style={{ filter: "url(#gooey-filter-menu)" }}
      >
        {/* Menu Items */}
          {isOpen &&
            MENU_ITEMS.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.button
                  key={item.label}
                  className="absolute w-12 h-12 bg-[#efefef] rounded-full flex items-center justify-center"
                  initial={{ y: 0, opacity: 0 }}
                  animate={{
                    y: -(index + 1) * 44, // Move up
                    opacity: 1,
                  }}
                  exit={{
                    y: 0, // Move back down
                    opacity: 0,
                    transition: {
                      delay:
                        (MENU_ITEMS.length - index) * 0.05,
                      duration: 0.4,
                      type: "spring",
                      bounce: 0,
                    },
                  }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.4,
                    type: "spring",
                    bounce: 0,
                  }}
                >
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, filter: "blur(10px)" }}
                      animate={{ opacity: 1, filter: "blur(0px)" }}
                      exit={{ opacity: 0, filter: "blur(10px)" }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.2,
                        type: "spring",
                        bounce: 0,
                      }}
                    >
                        
                      <Button variant="link" className="text-muted-foreground hover:text-black">
                        <Link href={item.href}>
                          <Icon className="w-5 h-5 text-muted-foreground hover:text-black" />
                        </Link>
                      </Button>
                    </motion.div>
                </motion.button>
              )
            })}

        {/* Main Menu Button */}
        <motion.button
          className="relative w-12 h-12 bg-[#efefef] rounded-full flex items-center justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-5 h-5 text-black" />
              </motion.div>
            ) : (
              <motion.div
                key="menu"
                initial={{ opacity: 0, filter: "blur(10px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.2 }}
              >
                <Menu className="w-5 h-5 text-black" />
              </motion.div>
            )}
        </motion.button>
      </div>
    </div>
  )
}

export { GooeyDemo }
