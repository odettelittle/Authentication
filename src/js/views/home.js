import React {useState} from "react"
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { signInWithEmailAndPassword } from "firebase/auth";

export const Home = () => {
const [email, setEmail] =useState("")
  <div className="d-flex justify-content-center">
    <form>
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
		  onChange={(event)=>{setEmail(event.target.value)}}
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
		  onChange={(event)=>{signInWithEmailAndPassword(event.target.value)}}
		  value={password}
        />
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
        />
        <label className="form-check-label" for="exampleCheck1">
          Check me out
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
);
}