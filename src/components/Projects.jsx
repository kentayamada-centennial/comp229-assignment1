import { item, wrap } from "./Projects.module.css";
import Emoji from "../assets/emoji.png";
import Sanpshot from "../assets/snapshot.png";
import Ecommerce from "../assets/ecommerce.png";

export default function Projects() {
  return (
    <>
      <h1>My Projects</h1>
      <div className={wrap}>
        <div className={item}>
          <img src={Emoji} />
          <p>
            We are using several emojis on daily basis while chatting with our
            friends and colleagues on messaging apps like WhatsApp, Facebook
            Messenger, Snapchat etc, A cool searching app where you can type and
            search any emoji from the given list of emojis.
          </p>
        </div>
        <div className={item}>
          <img src={Sanpshot} />
          <p>
            It's a simple gallery project where we can search the photos by
            keywords, change the category based on given options as Mountain,
            Beaches, Birds, Food. Once you hover on the images, you will get the
            zoom-in images. This project has been developed using React Hooks,
            Context API and React Router. The Routes were set up for four default
            pages and a search page. Also, the images were displayed using the
            Flickr API and Axios to fetch data as given in the description of
            repository.
          </p>
        </div>
        <div className={item}>
          <img src={Ecommerce} />
          <p>
            An e-commerce website built using React and Typescript, where we can
            filter clothes products using their customer preferred sizes as M, L
            or XL etc. We have a button called “Add to cart” below each product
            shown on the web page, once user selects any product, it will go to
            cart. At the end it can be used to checkout. These terms must be
            familiar to everyone now-a-days since it tries to mock popular
            e-commerce websites like Amazon, Flipkart and Myntra etc.
          </p>
        </div>
      </div>
    </>
  );
}
