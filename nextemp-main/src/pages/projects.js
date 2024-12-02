import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { HireMe2 } from "@/components/HireMe2";

import projectDubbo from "../../public/images/projects/dubbo.png";
import projectQuestionnaire from "../../public/images/projects/questionnaire.png";
import projectWallpaper from "../../public/images/projects/wallpaper.png";
import projectWebsite from "../../public/images/projects/website.png";

import TransitionEffect from "@/components/TransitionEffect";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  tools,
}) => {
  return (
    <article
      className="relative flex w-full items-center justify-between rounded-3xl rounded-br-2xl border
      border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark lg:flex-col 
      lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full object-cover"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-light xs:text-base">
          {type}
        </span>
        <span className="text-xl font-medium text-primaryDark dark:text-primaryDark xs:text-base">
          {tools}
        </span>
        <Link href={link} className="underline-offset-2 hover:underline">
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label="github link"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            className="ml-4 rounded-lg bg-dark p-2 px-6 text-lg font-semibold
             capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
             dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
             md:p-2 md:px-4 md:text-base"
            aria-label="Project link"
          >
            查看项目
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, tools }) => {
  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl rounded-br-2xl 
      border border-solid border-dark bg-light p-6 shadow-2xl dark:border-light dark:bg-dark xs:p-4"
    >
      <div
        className="absolute top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]"
      />
      <Link
        href={link}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-primary dark:text-light lg:text-lg md:text-base">
          {type}
        </span>
        <span className="text-xl font-medium text-primaryDark dark:text-primaryDark xs:text-base">
          {tools}
        </span>
        <Link href={link} className="underline-offset-2 hover:underline">
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl">
            {title}
          </h2>
        </Link>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | 前端大王</title>
        <meta
          name="description"
          content="前端大王的项目展示"
        />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16 flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="用技术改变世界 ✨"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="开源项目"
                tools="Vue.js | Pinia | Ant Design"
                title="Apache Dubbo Kubernetes Console"
                summary="优化用户界面的响应速度与交互体验，贡献超过 3000 行代码，深度参与 Apache Dubbo 开源社区。"
                img={projectDubbo}
                link="https://github.com/apache/dubbo-kubernetes"
                github="https://github.com/apache/dubbo-kubernetes"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="公司项目"
                tools="React | Redux | Tailwind CSS"
                title="贵州数脉科技公司官网"
                img={projectWebsite}
                link="https://www.200sm.com/"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="个人项目"
                tools="React | TypeScript | Ant Design"
                title="问卷管理系统"
                img={projectQuestionnaire}
                link="https://gitee.com/luoguangguang/falling-light-questionnaire.git"
              />
            </div>

            <div className="col-span-6 sm:col-span-12">
              <Project
                type="个人项目"
                tools="Electron | Vue.js | Tailwind CSS"
                title="桌面壁纸软件"
                img={projectWallpaper}
                link="https://gitee.com/luoguangguang/falling-light-wallpaper"
              />
            </div>

          </div>
        </Layout>
      </main>
    </>
  );
}