import ReactDOM from "react-dom";
import React from "react";
import { useForm } from "react-hook-form";
import "./styles.css";
function App() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="First name"
          {...register("First name", { required: true, maxLength: 80 })}
        />
        <input
          type="text"
          placeholder="Last name"
          {...register("Last name", { required: true, maxLength: 100 })}
        />
        <input
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          type="tel"
          placeholder="Mobile number"
          {...register("Mobile number", {
            required: true,
            minLength: 6,
            maxLength: 12
          })}
        />
        <select {...register("Title", { required: true })}>
          <option value="None">None</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Dr">Dr</option>
        </select>

        <div className="cambo">
          <span>Yes</span>
          <input
            {...register("Developer", { required: true })}
            type="radio"
            value="Yes"
          />
          <span>No</span>
          <input
            {...register("Developer", { required: true })}
            type="radio"
            value="No"
          />
        </div>
        <input type="submit" />
      </form>
      <div>
        <p>{`{`}</p>
        <span>{`"First name" : ${watch("First name")}`}</span>
        <span>{`"Last name" : ${watch("Last name")}`}</span>
        <span>{`"Email" : ${watch("Email")}`}</span>
        <span>{`"Mobile number" : ${watch("Mobile number")}`}</span>
        <span>{`"Title" : ${watch("Title")}`}</span>
        <span>{`"Developer" : ${watch("Developer")}`}</span>
        <p>{`}`}</p>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
