
/*Footer component for legal, address, contact accessibility*/
function Footer() {

    return (
        <footer className = "relative z-10 w-full px-6 py-4 mt-auto bg-[#E8A562] border-t-4 border-[#D89350]">

            <div className = "max-w-7xl mx-auto text-center text-white text-[14px]">
              &copy; {new Date().getFullYear()} Ucluelet and Area Childcare Society - All Rights Reserved. | 500 Matterson Drive, V0R 3A0  | (250) 726-2339
            </div>

        </footer>
    )

}

export default Footer;