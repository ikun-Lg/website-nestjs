import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-0 border-solid border-dark
    font-base text-lg dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout className="py-8 flex items-center justify-center lg:flex-col lg:py-6">
        <span>&copy; {new Date().getFullYear()}</span>

        <div className="flex items-center lg:py-2 ml-2">
          Built <span className="text-2xl px-1"></span>
          {""}
          by&nbsp;
          <Link
            href="https://space.bilibili.com/495549604?spm_id_from=333.1007.0.0"
            className="underline underline-offset-2"
          >
            前端大王
          </Link>
        </div>
      </Layout>
    </footer>
  );
};

export default Footer;
