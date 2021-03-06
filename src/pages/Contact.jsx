import React, {useState} from 'react';
import {db} from '../firebase';

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [msg, setMsg] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        phone: phone,
        msg: msg,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setPhone("");
    setMsg("");
  };

  return (
    <main>
      <div className="container pt-3">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-12">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" aria-describedby="emailHelp"/>
              </div>
              <div className="form-group">
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" aria-describedby="emailHelp"/>
              </div>
              <div className="form-group">
                <input type="text" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone" aria-describedby="emailHelp"/>
              </div>
              <div className="form-group">
                <textarea className="form-control" value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Message" rows="4"></textarea>
              </div>
              <button type="submit" className="btn btn-outline-danger">Submit</button>
            </form>
          </div>

          <div className="col-lg-6 col-md-6 col-12">
            <h5>Contact Details</h5>
            <div className="mb-2">
              <button className="btn btn-danger mr-2"><i className="fa fa-phone"></i></button>
              <a href="tel:9898989898">+91 12365 47896</a>
            </div>
            <div>
              <button className="btn btn-danger mr-2"><i className="fa fa-envelope"></i></button>
              <a href="mailto:contact@holo.in.net">contact@holo.in.net</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;
