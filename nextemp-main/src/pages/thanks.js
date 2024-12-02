import Layout from "@/components/Layout";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import Link from "next/link";

export default function Thanks() {
    return (
        <>
            <Head>
                <title>感谢 - 前端大王</title>
                <meta
                    name="description"
                    content="感谢您的留言"
                />
            </Head>

            <TransitionEffect />
            <main className={`flex w-full flex-col items-center justify-center dark:text-light`}>
                <Layout className="pt-16">
                    <AnimatedText
                        text="感谢您的留言！ 🎉"
                        className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
                    />

                    <div className="grid w-full grid-cols-8 gap-16 sm:gap-8 relative flex w-full flex-col items-center justify-center rounded-2xl rounded-br-2xl border border-solid border-dark bg-light p-6 shadow-2xl dark:border-light dark:bg-dark xs:p-4">
                        <div className="absolute top-0 -right-5 -z-10 h-[103%] w-[101.5%] rounded-[2rem] rounded-br-3xl bg-dark dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />

                        <div className="col-span-8 flex flex-col items-center justify-center text-center">
                            <h2 className="my-4 text-2xl font-bold capitalize text-primaryDark dark:text-primaryDark">
                                消息已收到
                            </h2>

                            <p className="mb-6 text-lg">
                                感谢您的留言！我会尽快回复您的邮件。
                            </p>

                            <Link
                                href="/"
                                className="px-6 py-3 font-bold capitalize text-light bg-dark border-2 border-solid border-dark dark:border-light dark:bg-light rounded-md hover:bg-transparent hover:text-dark dark:hover:text-light dark:hover:bg-dark dark:hover:border-light dark:hover:bg-dark dark:text-dark dark:hover:text-light"
                            >
                                返回首页
                            </Link>
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    );
}
