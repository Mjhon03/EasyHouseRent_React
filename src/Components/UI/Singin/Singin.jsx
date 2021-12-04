import './Singin.css'
import imageSingin from '../../../Images/logoSingin.jpg'

export const Singin = () => {
    return (
        <>
            <main className="divSingIn">
            
                
                <div className="item1">

                    <div className="headBoard">
                        <h1>Create New Account</h1>
                        <h5>Already Registered? <a href="#">Login here.</a></h5>
                    </div>

                    <div className="divForm">

                        <form className="formSingIn" action="" method="">

                            <b><p>NAME</p></b>
                            <input type="text" name="name" ></input>

                            <b><p>SURNAME</p></b>
                            <input type="text" name="surname" ></input>

                            <b><p>EMAIL</p></b>
                            <input type="text" name="email" ></input>

                            <b><p>PASSWORD</p></b>
                            <input type="password" name="password" ></input>

                            <b><p>MOBILE NUMBER</p></b>
                            <input type="text" name="mobileNumber" ></input>

                            <b><p>DATE OF BIRTH</p></b>
                            <input type="date" name="date" ></input><br/><br/>

                            <button className="btnSingUp"><b>Sing Up</b></button>

                        </form>

                    </div>

                </div>

                <div className="item2">
                    <img className="imgSingIn" src={imageSingin} alt="Logo Sing In"/>
                </div>

            </main>
        </>
    );
}