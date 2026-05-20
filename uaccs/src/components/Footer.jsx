
/*Footer component for legal, address, contact accessibility*/
function Footer() {

    return (
        <footer className = "absolute w-full px-6 py-6 mt-auto bg-[#3A4A33] border-t-4 border-[#2B3625]">
            <div className = "max-w-7xl mx-auto text-center text-[#B8C5B0] text-[14px]">
              &copy; {new Date().getFullYear()} Ucluelet and Area Childcare Society. All Rights Reserved | ADDRESS | PHONE NUMBER
            </div>

        </footer>
    )

}

export default Footer;