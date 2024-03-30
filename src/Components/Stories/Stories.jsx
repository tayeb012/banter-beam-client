import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Ensure you import the CSS
import "@splidejs/react-splide/css/core";

const Stories = () => {
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

  return (
    <div className="overflow-x-hidden">
      <Splide
        options={{
          type: "slide",
          perPage: 8,
          pagination: false,
          arrows: false,
        }}
        aria-label="My Favorite Images" // Uncommented for accessibility
      >
        {userProfile?.map((user) => (
          <SplideSlide key={user.id}>
            <div className="flex flex-col items-center gap-1">
              <div className="bg-instagram-gradient size-14 rounded-full rotate-[120deg] flex justify-center items-center">
                <div className="rounded-full size-[64px] overflow-hidden -rotate-[120deg] border-[2px] border-black">
                  <img
                    src={user.image}
                    alt={user.name}
                    className="rounded-full"
                  />
                </div>
              </div>
              <p className="text-xs">{user.name}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Stories;
