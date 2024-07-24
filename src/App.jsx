import { useState } from "react";

function App() {
  /**
   * Challenge: Connect the form to local state
   *
   * 1. Create a state object to store the 4 values we need to save.
   * 2. Create a single handleChange function that can
   *    manage the state of all the inputs and set it up
   *    correctly
   * 3. When the user clicks "Sign up", check if the
   *    password & confirmation match each other. If
   *    so, log "Successfully signed up" to the console.
   *    If not, log "passwords to not match" to the console.
   * 4. Also when submitting the form, if the person checked
   *    the "newsletter" checkbox, log "Thanks for signing
   *    up for our newsletter!" to the console.
   */
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm_password: "",
    checkbox: true,
  });
  function handleChange(event) {
    setFormData(prev=>{
      const {name,value}=event.target
      return({
        ...prev,
        [name]:value,
        checkbox:!formData.checkbox
      })
    })
  }
  function submit(e){
e.preventDefault()
console.log(formData)
  }
  return (
    <div className="bg-purple-500">
      <div className="w-[30%] mx-auto rounded-md bg-white">
        <form onSubmit={submit} className="w-[60%] mx-auto grid">
          <input
            className="border rounded-sm my-2"
            type="text"
            value={FormData.email}
            name="email"
            onChange={handleChange}
          />
          <input
            className="border rounded-sm my-2"
            type="text"
            value={FormData.password}
            name="password"
            onChange={handleChange}
          />
          <input
            className="border rounded-sm my-2"
            type="text"
          value={FormData.confirm_password}
            name="confirm_password"
            onChange={handleChange}
          />
          <div className="flex gap-4">
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              value={FormData.checkbox}
              onChange={handleChange}
            />
            <label htmlFor="checkbox">I want to join the newsletter</label>
          </div>

          <button  className="bg-purple-500 text-white w-[27%] mx-auto rounded-sm ">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
