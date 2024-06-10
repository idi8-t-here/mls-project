import { useState } from "react";
import axios from "axios";
const Payment = () => {
  const [form, setForm] = useState({
    amount: "",
    currency: "",
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  // console.log(form)
  const tx_ref = `${form.first_name}-${Date.now()}`;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:3000/accept-payment",
        {
          amount: form.amount,
          currency: form.currency,
          email: form.email,
          first_name: form.first_name,
          last_name: form.last_name,
          phone_number: form.phone_number,
          tx_ref,
          // return_url,
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      window.location.href = res.data.data.checkout_url;
      console.log(res);
      setForm({
        amount: "",
        currency: "",
        email: "",
        first_name: "",
        last_name: "",
        phone_number: "",
        tx_ref,
      });
    } catch (error) {
      console.log("Error", error);
    }
  };
  console.log("this is the data")
  const [loading, setLoading] = useState(false);

  const Submit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Perform payment processing logic here

    setLoading(false);
  };
  return (
    <>
      <div
        id="myModal"
        className="modal"
        tabIndex="-1"
        role="dialog"
        style={{ display: "block", backgroundColor: "#0000004a" }}
      >
        <div
          className="modal-content"
          style={{ maxWidth: "500px", margin: "auto" }}
        >
          {/* Modal header */}
          <div className="modal-header">
            {/* Modal title */}
            <h2>Payment Details</h2>
            {/* Close button */}
          </div>
          {/* Modal body */}
          <div className="modal-body scroll-y mx-5 mx-xl-15 my-7">
            <form
              className=" p-5 m-10 shadow-2xl rounded-xl"
              onSubmit={handleSubmit}
            >
              <div className="mb-3">
                  <label htmlFor="personName" name="first_name" className="form-label">
                    Person's Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="personName"
                    placeholder="Enter person's name"
                    onChange={handleChange}
                    required
                  />
                  
                </div>
              <div className="mb-3">
                  <label htmlFor="personName" className="form-label">
                    Amount
                  </label>
                  <input
                className="form-control"
                onChange={handleChange}
                type="text"
                name="amount"
                value={form.amount}
                placeholder="amount"
                required
              />
                  
                </div>
              
              <br />
              <input
                className="m-3 border border-black px-5 py-2 rounded-lg"
                onChange={handleChange}
                type="hidden"
                name="currency"
                value={form.currency = "ETB"}
                placeholder="currency"
              />
              
              <button
                className="px-[100px] py-3 rounded-md bg-green-600 text-white"
                type="submit"
              >
                Pay With Chapa
              </button>
            </form>
            {/* Offer details container */}
            
            {/* Proceed to Payment button */}
            
          </div>
          {/* End Modal body */}
        </div>
      </div>

      
    </>
  );
};

export default Payment;
