import React from "react";
import Stories from "../../Components/Stories/Stories";
import SuggestionProfile from "../../Components/SuggestionProfile/SuggestionProfile";
import PostContent from "../../Components/PostContent/PostContent";

const Home = () => {
  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Emma",
    "Frank",
    "Grace",
    "Henry",
    "Ivy",
    "Jack",
    "John",
    "Karen",
    "Larry",
    "Mary",
    "Nancy",
    "Olivia",
  ];

  const userProfile = [
    {
      id: 1,
      name: names[0],
      image:
        "https://t4.ftcdn.net/jpg/03/96/46/43/240_F_396464388_dDXhg2Q1RdqxQpXMdH4sTAUEbRkLLsvo.jpg",
    },
    {
      id: 2,
      name: names[1],
      image:
        "https://t4.ftcdn.net/jpg/06/02/80/93/240_F_602809315_r4ZFzh2RCJH8vkiKHfBl6qE4JhTST9XY.jpg",
    },
    {
      id: 3,
      name: names[2],
      image:
        "https://t3.ftcdn.net/jpg/06/01/31/96/240_F_601319600_S2ek1VKxw15BjgtH5HeIG41IasimSAbC.jpghttps://t4.ftcdn.net/jpg/01/13/84/03/240_F_113840357_IefDEucJV73EPDeikb6KUSYnIvEEQFKY.jpg",
    },
    {
      id: 4,
      name: names[3],
      image:
        "https://t4.ftcdn.net/jpg/06/44/19/51/240_F_644195153_7uBMfNmyIzRF7rIEjUbjynOxSwnbYSd3.jpg",
    },
    {
      id: 5,
      name: names[4],
      image:
        "https://t4.ftcdn.net/jpg/05/65/75/65/240_F_565756570_skYKSFZ634FWwdVfXvJ0s0uCal15ce4e.jpg",
    },
    {
      id: 6,
      name: names[5],
      image:
        "https://t3.ftcdn.net/jpg/06/92/95/28/240_F_692952804_YVQ7ucOqO6krf4cG5O5dv4fMjUnsBnsq.jpg",
    },
    {
      id: 7,
      name: names[6],
      image:
        "https://t4.ftcdn.net/jpg/00/64/91/49/240_F_64914943_CPMmzvOgsIZFiUmUxXdtY3TbuXS4JpCM.jpg",
    },
    {
      id: 8,
      name: names[7],
      image:
        "https://t3.ftcdn.net/jpg/06/24/73/88/240_F_624738882_6JUWtwIfgf0ILmNEVVGUphStZmuny0bo.jpg",
    },
    {
      id: 9,
      name: names[8],
      image:
        "https://t4.ftcdn.net/jpg/06/44/19/83/240_F_644198381_Z0rF3ZYB5DI2KPuCu7TfcdZkXmaZ672J.jpg",
    },
    {
      id: 10,
      name: names[9],
      image:
        "https://t3.ftcdn.net/jpg/05/58/30/48/240_F_558304899_8hJHRNgDlrQcAytvMP3efiQSLCt3S7qi.jpg",
    },
    {
      id: 11,
      name: names[10],
      image:
        "https://t3.ftcdn.net/jpg/05/52/49/50/240_F_552495017_yQ0I8QzP2Cr4U2e6ecSNfdLUNyRLQvej.jpg",
    },
    {
      id: 12,
      name: names[11],
      image:
        "https://t4.ftcdn.net/jpg/02/86/18/79/240_F_286187964_IhCZijBHwB8NvpSTXk5Nt3IqGckgGMNO.jpg",
    },
    {
      id: 13,
      name: names[12],
      image:
        "https://t4.ftcdn.net/jpg/05/56/41/95/240_F_556419597_eYgAqxNbFv7ktkpOk7GqSStupg1mYDA8.jpg",
    },
  ];

  const footerLinks = [
    {
      id: 1,
      name: "About",
      link: "https://about.instagram.com",
    },
    {
      id: 2,
      name: "Help",
      link: "https://help.instagram.com",
    },
    {
      id: 3,
      name: "Press",
      link: "https://about.instagram.com/blog",
    },
    {
      id: 4,
      name: "API",
      link: "https://developers.facebook.com/docs/instagram",
    },
    {
      id: 5,
      name: "Jobs",
      link: "https://about.instagram.com/about-us/careers",
    },
    {
      id: 6,
      name: "Privacy",
      link: "https://privacycenter.instagram.com/policy/?entry_point=ig_help_center_data_policy_redirect",
    },
    {
      id: 7,
      name: "Terms",
      link: "https://help.instagram.com/581066165581870",
    },
    {
      id: 8,
      name: "Locations",
      link: "https://www.instagram.com/explore/locations",
    },
    {
      id: 9,
      name: "Language",
      link: "https://www.instagram.com/language/preferences",
    },
    {
      id: 10,
      name: "Meta Verified",
      link: "https://accountscenter.instagram.com/meta_verified/?entrypoint=web_footer",
    },
  ];

  return (
    <div className="flex justify-center w-full gap-10 mt-8 mx-32">
      <section className="w-[32rem]">
        {" "}
        <div className="h-20">
          <Stories></Stories>
        </div>
        <div className="pb-10">
          <PostContent></PostContent>
        </div>
      </section>
      <section className=" w-72 ">
        <div>
          <div className=" px-2 h-14 my-2">
            <SuggestionProfile
              userName="Tayeb Hossan"
              userPhoto="https://i.ibb.co/n7PsPSQ/TAYEB-DSC-0163.jpg"
              haveTodo="Switch"
            />
          </div>
          <div className="text-[13px] flex justify-between items-center h-5 mb-2 mx-2">
            <span className="text-[#A2A2A2]">Suggested for you</span>
            <span className="cursor-pointer hover:text-[#A2A2A2]">See All</span>
          </div>
          <div className="px-2  h-fit flex flex-col gap-2">
            {userProfile.slice(0, 5).map((user, index) => (
              <SuggestionProfile
                key={index}
                userName={user.name}
                userPhoto={user.image}
                haveTodo="Follow"
              />
            ))}
          </div>
        </div>
        <div className="mt-10 ml-2 text-[13px] flex items-end  flex-wrap gap-[2px]">
          {footerLinks?.map((footerLink, index) => (
            <React.Fragment key={footerLink.id}>
              <div>
                <a href={footerLink.link} target="_blank" rel="noreferrer">
                  <span className="text-[#A2A2A2] hover:underline">
                    {footerLink.name}
                  </span>
                </a>
              </div>
              {index < footerLinks.length - 1 && (
                <div className="text-[#A2A2A2]">•</div>
              )}
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
