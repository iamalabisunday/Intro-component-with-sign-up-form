import { useState } from "react";

export default function IntoComponent() {
  // State variables
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // To validate the email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // To validate the password
  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      setValid(false);
      setError("All fields are required");
      setSuccess("");
      return;
    }

    if (!validateEmail(email)) {
      setValid(false);
      setError("Please enter a valid email address");
      setSuccess("");
      return;
    }

    if (password.length < 8 || !validatePassword(password)) {
      setValid(false);
      setError(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      );
      setSuccess("");
      return;
    } else {
      setValid(true);
      setError("");
      setSuccess("Form submitted successfully");
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      console.log("Form submitted successfully:", {
        firstName,
        lastName,
        email,
        password,
      });
    }
  };

  // Handle First Name input changes
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };

  // Handle Last Name input changes
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };

  // Handle Email input changes
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  // Handle Password input changes
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="w-screen h-screen md:bg-[url(./images/bg-intro-desktop.png)] bg-[url(./images/bg-intro-mobile.png)]  bg-no-repeat bg-cover bg-center bg-[#f28b82] flex md:justify-center md:items-center">
      <main className="w-full md:w-[1440px] h-full p-4 flex md:flex-row flex-col justify-start md:justify-between items-center md:px-50">
        <header className="md:w-[45%] mt-14 text-center md:text-start text-white w-[85%]">
          <h1 className="font-bold text-2xl md:text-[2.8rem]">
            Learn to code by watching others
          </h1>
          <p className="text-[0.9rem] pt-4 leading-6 ">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </p>
        </header>
        <section className="pt-12">
          <article className="bg-[#655fa3] text-white px-[4rem] py-6 text-center rounded-[0.65rem] shadow-[#0e0e0eac] shadow-md">
            <p className="font-light text-[0.rem]">
              <span className="font-bold">Try it free 7 days</span> then $20/mo.
              thereafter
            </p>
          </article>
          {/* Form Section */}
          <form
            action="submit"
            onSubmit={handleSubmit}
            value={(firstName, lastName, email, password)}
            required
            className="bg-white mt-6 p-4 md:p-8 flex flex-col gap-4 justify-start items-center rounded-[0.65rem] shadow-[#0e0e0e59] shadow-md md:w-120"
          >
            <input
              type="text"
              value={firstName}
              onChange={handleFirstName}
              placeholder="First Name"
              className="border-2 focus:border-2 w-full py-3 px-6 rounded-md border-[#e2e2e2] focus:border-[#959595] outline-none placeholder:text-[#e2e2e2]"
            />
            <input
              type="text"
              value={lastName}
              onChange={handleLastName}
              placeholder="Last Name"
              className="border-2 focus:border-2 w-full py-3 px-6 rounded-md border-[#e2e2e2] focus:border-[#959595] outline-none placeholder:text-[#e2e2e2]"
            />
            <input
              type="email"
              value={email}
              onChange={handleEmail}
              placeholder="Email Address"
              className="border-2 focus:border-2 w-full py-3 px-6 rounded-md border-[#e2e2e2] focus:border-[#959595] outline-none placeholder:text-[#e2e2e2]"
            />
            <input
              type="password"
              value={password}
              onChange={handlePassword}
              placeholder="Password"
              className="border-2 focus:border-2 w-full py-3 px-6 rounded-md border-[#e2e2e2] focus:border-[#959595] outline-none placeholder:text-[#e2e2e2]"
            />
            <button
              type="submit"
              className="bg-[#2fd186] text-white uppercase w-full py-3 rounded-md border-[#cacaca] active:border-[#e2e2e2] cursor-pointer"
            >
              Claim your free Trial
            </button>

            {/* Error and success messages */}
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            {success && (
              <p className="text-green-500 text-sm mt-2">{success}</p>
            )}

            <p className="text-center text-[0.6rem] text-[#cacaca] ">
              By clicking the button, you are agreeing to our{" "}
              <span className="text-[#f28b82] font-medium pointer cursor-pointer">
                Terms and Services
              </span>
            </p>
          </form>
        </section>
      </main>
    </div>
  );
}
