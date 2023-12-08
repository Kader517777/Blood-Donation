import Button from "../../Component/Shared/Button";

const ContuctUs = () => {
    return (
        <div className="card max-w-[1224px] bg-base-100 shadow-xl my-12">
            <div className="card-body items-center text-center">
                <h2 className="card-title">Contuct Us!</h2>
                <form className="card-body w-full">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Email" className="input input-bordered" required />

                    </div>
                    <div className="form-control mt-6">
                        <Button fontText='Contuct us' />
                    </div>
                    <div className="text-3xl font-bold">
                        Emergency contact: 01625876074
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContuctUs;