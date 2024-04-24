const SignUp = () => {

    const handleSignUp = e => {
        e.preventDefault();
        const formData = e.target;
        const email = formData.email.value;
        const password = formData.password.value;

        const user = {email, password};
        console.log(user);
    }
  return (
    <div>
      <form className="card-body" onSubmit={handleSignUp}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
