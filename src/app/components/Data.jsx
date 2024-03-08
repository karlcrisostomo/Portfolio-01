"use client";

import { events } from "../constants";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import axios from "axios";
import Image from "next/image";
const styles = {
  projectContainer: `
    container 
    mx-auto  
    p-4 
    sm:p-6 
    sm:max-w-lg 
    md:max-w-xl 
    lg:max-w-4xl 
    xl:max-w-6xl 
    2xl:max-w-7xl
  
  `,
  textStyles: `
    font-bold 
    text-2xl 
    sm:text-3xl 
    lg:text-4xl 
    tracking-wider
  
  `,
  detailsContainer: `
    flex 
    flex-col 
    lg:flex-row 
    gap-4 
    mt-12 
    tracking-wider 
    text-[1rem] 
    sm:text-[1.2rem] 
    leading-relaxed 
    xl:text-[1.3rem
  `,
  asideStyles: `
    text-sm 
    sm:text-lg 
    flex-none 
    w-[300px]
  `,
  iconsContainer: `
    flex 
    justify-end 
    gap-2 
    mt-5
  `,
  linkStyles: `
    cursor-pointer  
    hover:scale-110 
    transition-all 
    duration-300 
    hover:fill-blue-950
  `,
};

const ExternalLink = () => {
  return (
    <>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_35_15)">
          <path
            d="M8.41999 8.23465C8.08666 7.38399 8.09999 6.41199 8.24799 5.52265C9.26691 5.82795 10.2239 6.31094 11.0747 6.94932C11.448 7.23465 11.9373 7.32665 12.3933 7.18932C13.5634 6.83924 14.7786 6.66313 16 6.66665C17.2813 6.66665 18.4987 6.85332 19.604 7.18799C20.06 7.32665 20.5493 7.23332 20.9213 6.94799C21.7717 6.30974 22.7282 5.82676 23.7467 5.52132C23.8947 6.41065 23.9067 7.38265 23.576 8.23199C23.376 8.74399 23.476 9.33332 23.8533 9.75199C24.8187 10.8227 25.3333 12.0533 25.3333 13.3333C25.3333 16.152 22.7067 18.916 18.488 19.7573C17.432 19.968 17.02 21.2973 17.828 22.0587C18.3467 22.5467 18.6667 23.2347 18.6667 24V28C18.6667 28.3536 18.8071 28.6927 19.0572 28.9428C19.3072 29.1928 19.6464 29.3333 20 29.3333C20.3536 29.3333 20.6928 29.1928 20.9428 28.9428C21.1928 28.6927 21.3333 28.3536 21.3333 28V24C21.3333 23.24 21.1733 22.5173 20.888 21.8627C24.9107 20.4667 28 17.324 28 13.3333C28 11.5373 27.3547 9.88665 26.284 8.50399C26.564 7.41065 26.5387 6.30932 26.432 5.46399C26.3373 4.70665 26.2053 3.71465 25.672 3.12265C24.8787 2.24399 23.5653 2.76132 22.632 3.07999C21.6308 3.41877 20.6782 3.8872 19.7987 4.47332C18.5574 4.15654 17.2811 3.99751 16 3.99999C14.6747 3.99999 13.396 4.16665 12.1987 4.47465C11.3191 3.88852 10.3665 3.42009 9.36532 3.08132C8.43199 2.76132 7.11732 2.24399 6.32399 3.12265C5.77999 3.72532 5.66666 4.63865 5.56932 5.41465L5.56266 5.46532C5.45599 6.31199 5.43199 7.41465 5.71199 8.50932C4.64532 9.89065 3.99999 11.5387 3.99999 13.3333C3.99999 17.3227 7.08932 20.4667 11.112 21.8627C10.8208 22.5284 10.6693 23.2467 10.6667 23.9733L10.4427 24.0187C9.48666 24.1507 8.87466 24.032 8.45866 23.856C7.44532 23.4267 6.92266 22.3453 6.28532 21.5187C5.88799 21.0053 5.30932 20.364 4.42132 20.068C4.25516 20.0127 4.07972 19.9906 3.90503 20.0031C3.73034 20.0155 3.55981 20.0623 3.40319 20.1407C3.08688 20.2989 2.8464 20.5764 2.73466 20.912C2.62291 21.2476 2.64906 21.6138 2.80734 21.9301C2.96562 22.2464 3.24307 22.4869 3.57866 22.5987C4.32266 22.8467 4.83732 24.1213 5.30932 24.6867C5.80666 25.284 6.46799 25.908 7.41599 26.3107C8.32532 26.6973 9.39332 26.8347 10.6667 26.6787V28C10.6667 28.3536 10.8071 28.6927 11.0572 28.9428C11.3072 29.1928 11.6464 29.3333 12 29.3333C12.3536 29.3333 12.6928 29.1928 12.9428 28.9428C13.1928 28.6927 13.3333 28.3536 13.3333 28V24C13.3333 23.2347 13.6533 22.5467 14.172 22.0587C14.9813 21.296 14.568 19.968 13.512 19.7573C9.29199 18.916 6.66666 16.152 6.66666 13.3333C6.66666 12.056 7.17999 10.8253 8.14399 9.75465C8.52132 9.33599 8.61999 8.74665 8.41999 8.23465Z"
            fill="currentColor"
          />
        </g>
        <defs>
          <clipPath id="clip0_35_15">
            <rect width="32" height="32" fill="none" stroke="currentColor" />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

const GitHubIcon = () => {
  return (
    <>
      <svg
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 6H6C5.46957 6 4.96086 6.21071 4.58579 6.58579C4.21071 6.96086 4 7.46957 4 8V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V12M11 13L20 4M20 4H15M20 4V9"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
};

const ProjectContent = ({ descripion, title, techStack }) => {
  const [imageSrc, setImageSrc] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      const apiURL = "https://placehold.co/600x400.png";

      try {
        const res = await axios.get(apiURL, { responseType: "arraybuffer" });

        if (res.status === 200 && res.data) {
          const blob = new Blob([res.data], { type: "image/png" });

          const imageUrl = URL.createObjectURL(blob);

          setImageSrc(imageUrl);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchImage();
  }, [imageSrc]);

  const ref = useRef();
  const isInView = useInView(ref);

  const icons = [
    { id: 1, ico: ExternalLink },
    { id: 2, ico: GitHubIcon },
  ];

  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.5,
    },
  };

  return (
    <section className={styles.projectContainer}>
      <ul>
        <motion.li
          ref={ref}
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 2, ease: "easeOut" }}
          variants={variants}
        >
          <div className=" pb-12">
            {isInView ? (
              title.split(" ").map((el, idx) => (
                <motion.span
                  className={styles.textStyles}
                  key={idx}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 2,
                    delay: idx / 10,
                  }}
                >
                  {el}{" "}
                </motion.span>
              ))
            ) : (
              <></>
            )}
          </div>

          <div>
            {imageSrc && (
              <Image
                priority
                quality={65}
                src={imageSrc}
                width={300}
                height={300}
                className="w-full"
                alt="Project Image"
              />
            )}

            <span className={styles.detailsContainer}>
              <aside className={styles.asideStyles}>
                {" "}
                <span className="font-bold">Technology Stack:</span> {techStack}
              </aside>

              <p>{descripion}</p>
            </span>

            <span className={styles.iconsContainer}>
              {icons.map((icon) => (
                <a key={icon.id} className={styles.linkStyles}>
                  {icon.ico()}
                </a>
              ))}
            </span>
          </div>
        </motion.li>
      </ul>
    </section>
  );
};

const Data = () => {
  return (
    <section>
      <motion.div className="">
        <ul className=" container mx-auto p-4">
          {events.map((e, idx) => (
            <ProjectContent
              key={idx}
              title={e.title}
              descripion={e.descripion}
              techStack={e.techStack}
            />
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Data;
