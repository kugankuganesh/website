import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2018 - 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-60 flex flex-col gap-10">
          <ResumeCard
            title="Software Engineer"
            subTitle="AKH IT Solutions - ( Aug 2023 - Present)"
            result="Colombo"
            des="In AKH Its good place to learn a lot things such as react, laravel and Api development."
          />
          <ResumeCard
            title="Software Engineer"
            subTitle="IM Solution - (Dec 2022 - Aug 2023)"
            result="Rayagiriya,Colombo"
            des="Its a Good Place to work with independently with Exsisting System but I am worked with Yii framework such a great experience to Me."
          />
          <ResumeCard
            title="Web Developer Developer"
            subTitle="Stalione Lanka (Pvt) Ltd - (Mar 2022 - Nov 2022)"
            result="Kollupitya, Colombo"
            des="In here I cant to learn new things just I am work on Laravel front end Development and wordpress Development I never Recoumend for this compny to anyone.
            As a Laraval Developer, I code PHP,Ajax and Json codes and work with our
product team to create a product for our customers and I involved into a
entire product lifecycle including development, deployment, bug fixing,
testing and maintaince of new and existing features"
          />

          <ResumeCard
            title="
            Web Developer (PHP AND WORDPRESS)"
            subTitle="DreamSpace Academy - (Jan 2019 - Apr 2022)"
            result="Batticaloa"
            des=" At Dreamspace Academy I worked as WordPress developer and programming
            coordinator. During this period, I also trained and mentored new recruits with
            their transition into the role as web developers at DreamSpace.
            In here I worked in php and wordpress development."
          />
        </div>
      </div>
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2017 - 2018</p>
          <h2 className="text-4xl font-bold">Trainee Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="
            Odoo consultant"
            subTitle="Nisus Solutions - (Jan 2018 - Jul 2018)"
            result=" Colombo"
            des=" In here I worked as a Odoo developer. As a Odoo developer at Nisus, I developed various modules in the ERP systems
            based on customer specifications. At that time, I was also involved with little
            bit of WordPress development to help out with CMS team’s overload"
          />
          <ResumeCard
            title="Odoo trainee developer"
            subTitle="Oviya IT Solutions (Pvt) Ltd (Aug 2017 - Jan 2018 )"
            result="Batticaloa"
            des="In here I am Complete the internship ."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
