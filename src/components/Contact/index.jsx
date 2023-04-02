




  import React, { useState } from "react";
  // import {Link} from ''
  import { ToastContainer, toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";
  
  import Button from "../Button/Button";
  
  const Contact = () => {
    const [inputs, setInputs] = useState(null);
    const notify = () => {
      console.log("toast");
  
      return toast.info("🚀🚀 Coming Soon !", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    };
    // // const handleChange = (e) => {
    //   setInputs({
    //     ...inputs,
    //     [e.target.id]: e.target.value,
    //   });
    //   console.log(inputs);
    // };
  
    const handleSubmit =  async (e) => {
      console.log('l')
      e.preventDefault();
      notify()
    };
    return (
      <div id="contact" className="bg-[#F7F5F2] ">
        <div className=" w-[90%] md:w-[75%] lg:w-[60%] mx-auto pt-32 pb-20 space-y-16 md:space-y-24  ">
          <div className="text-center">
            <p className="font-black text-5xl">Get in touch!</p>
            <p className="font-mdeium text-xl mt-7">
              {" "}
              I am open to networking and new opportunities. Let's connect and start a conversation about how we can work together.
            </p>
          </div>
          <div>
            <form className=" flex flex-col space-y-10" onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row sm:space-x-14 space-y-10 sm:space-y-0">
                <div className=" flex-1 flex flex-col ">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    className="py-3 bg-transparent pr-4 border-b-[1px] text-sm  md:text-base border-b-[#333333] outline-none focus:border-b-primary "
                    placeholder="Enter Your name"
                    // onChange={handleChange}
                  />
                </div>
                <div className="flex-1 flex flex-col ">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    className="py-3 bg-transparent pr-3 border-b-[1px] text-sm  md:text-base border-b-[#333333] outline-none focus:border-b-primary "
                    placeholder="Enter Valid Email Address"
                    // onChange={handleChange}
                  />
                </div>
              </div>
  
              <div className="flex-1 flex flex-col ">
                <label htmlFor="message">Your Message</label>
  
                <textarea
                  // onChange={handleChange}
                  className="py-3 bg-transparent pr-3 border-b-[1px] text-sm  md:text-base border-b-[#333333] outline-none focus:border-b-primary "
                  id="message"
                  placeholder="Hi, Ridwan. checked your portfolio I will be needing you to design and develop a product for my Company Y."
                />
              </div>
  
              <Button mail="mailto:riliwanademola@yahoo.com" className="self-center">SEND</Button>
            </form>
          </div>
  
          <footer className="self-center">
            <p className="text-xl font-bold text-center">
              © Ridwan Abdulsalam 2020
            </p>
          </footer>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  };
  
  export default Contact;
  