/* eslint-disable jsx-a11y/alt-text */
// import '../public/css/style.css';

export default function Content() {

    return (

        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <title>Vegetables</title>
            </head>
            <body>

            </body>


            <article className="main-area">
                <img src="images/img_main_pumpkin.png" className="img_main_pumpkin" />
                <div className="content-area">
                    <div className="vegetableside">
                        <div className="vegetabletitle">Vegetables</div>
                        <div className="picture-container">
                            <img src="images/img_vegetables_pepper.png" className="img_vegetables_pepper" />
                            <img src="images/img_vegetables_carrot.png" className="img_vegetables_pepper" />
                            <img src="images/img_vegetables_corn.png" className="img_vegetables_pepper" />

                        </div>
                    </div>
                    <div className="contactside">
                        <div className="contacttitle">Contact</div>
                        <div className="contactbg">
                            <div className="contactcontent">
                                For any questions or suggestions about Vegetables, Vegetables Club or your
                                online order you can contact Vegetables Customer Service by phone, email
                                or post and we’ll be happy to help.
                                <br /></div>
                            <div className="hr">
                                <hr />
                            </div>
                            <div className="email">
                                E-mail : Vegetables@aaabbccc.com<br />
                                PHONE : +886-123-456-789
                            </div>
                        </div>
                    </div>
                </div>

            </article>


        </html>
    );
}