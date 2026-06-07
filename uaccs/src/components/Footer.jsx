
/*Footer component for legal, address, contact accessibility*/
function Footer() {

    return (
        <footer className = "relative z-20 w-full pb-4 px-6 py-4 mt-auto select-none">

            <div className = "max-w-7xl mx-auto text-center text-white text-[14px]">
              &copy; {new Date().getFullYear()} Ucluelet and Area Childcare Society - All Rights Reserved. | 500 Matterson Drive, V0R 3A0  | (250) 726-2339
            </div>

            <div className = "absolute bottom-0 left-0 w-full -z-10">
                <svg
                viewBox="0 0 1440 320"
                preserveAspectRatio='none'
                className = "w-full h-32" 
                >
                    <path 
                    fill="#E8A562" 
                    fill-opacity="1"
                    d="M0,64L60,96C120,128,240,192,360,186.7C480,181,600,107,720,96C840,85,960,139,1080,144C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
                    </path>

                </svg>

            </div>

        </footer>
    )

}

export default Footer;