export default function Header() {
  return (
    <>
      <div className="w-[414px] h-[80px] absolute left-[-1px] top-[-1px] bg-[#9395d3]" />
      <svg
        width={32}
        height={32}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[39px] top-[25px]"
        preserveAspectRatio="none"
      >
        <path
          d="M13.2855 15C13.2855 14.4477 12.8378 14 12.2855 14H11.8241C11.6324 14 11.4448 14.0551 11.2836 14.1587L9.3275 15.4153C9.12339 15.5464 9 15.7724 9 16.015C9 16.5779 9.62201 16.9187 10.0964 16.6156L11.37 15.802C11.3774 15.7973 11.3861 15.7947 11.3949 15.7947C11.4204 15.7947 11.4411 15.8154 11.4411 15.8409V23.2596C11.4411 23.7689 11.8539 24.1818 12.3633 24.1818C12.8726 24.1818 13.2855 23.7689 13.2855 23.2596V15Z"
          fill="white"
        />
        <path
          d="M17.3507 23.9482C17.8744 24.1967 18.4676 24.321 19.1305 24.321C19.8497 24.321 20.4828 24.1719 21.0297 23.8736C21.5798 23.572 22.0091 23.1593 22.3173 22.6357C22.6289 22.1087 22.7846 21.5088 22.7846 20.8359C22.7846 20.183 22.6454 19.603 22.367 19.0959C22.0886 18.5888 21.7075 18.1911 21.2236 17.9027C20.7396 17.611 20.1895 17.4652 19.573 17.4652C19.162 17.4652 18.7842 17.5398 18.4395 17.6889C18.1016 17.8318 17.8386 18.0114 17.6504 18.2275C17.6431 18.2359 17.6326 18.2408 17.6215 18.2408C17.599 18.2408 17.5815 18.2212 17.5839 18.1988L17.7758 16.4332C17.8309 15.9257 18.2595 15.5412 18.7699 15.5412H21.4821C21.9077 15.5412 22.2527 15.1962 22.2527 14.7706C22.2527 14.345 21.9077 14 21.4821 14H17.2502C16.737 14 16.307 14.3886 16.2553 14.8992L15.9092 18.3147C15.856 18.8403 16.2208 19.3167 16.7421 19.4023L16.9447 19.4356C17.2786 19.4904 17.6112 19.357 17.9074 19.1936C17.9919 19.1471 18.083 19.1046 18.1809 19.0661C18.4759 18.95 18.7759 18.8937 19.0808 18.897C19.4553 18.897 19.7868 18.9832 20.0751 19.1555C20.3635 19.3246 20.5905 19.5582 20.7562 19.8565C20.9219 20.1548 21.0031 20.4962 20.9998 20.8807C21.0031 21.2585 20.9236 21.5949 20.7612 21.8899C20.5988 22.1849 20.3767 22.4152 20.095 22.581C19.8133 22.7467 19.4918 22.8295 19.1305 22.8295C18.6698 22.8295 18.2754 22.6986 17.9473 22.4368C17.853 22.3606 17.7709 22.2782 17.701 22.1894C17.4062 21.8153 17.0381 21.4126 16.5617 21.4126C16.0447 21.4126 15.6127 21.8537 15.7968 22.3369C15.8743 22.5401 15.9763 22.7325 16.1028 22.9141C16.4111 23.3516 16.827 23.6963 17.3507 23.9482Z"
          fill="white"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M9 0C8.44772 0 8 0.447715 8 1V2H4C1.79086 2 0 3.79086 0 6V28C0 30.2091 1.79086 32 4 32H28C30.2091 32 32 30.2091 32 28V6C32 3.79086 30.2091 2 28 2H24V1C24 0.447715 23.5523 0 23 0C22.4477 0 22 0.447715 22 1V2H10V1C10 0.447715 9.55228 0 9 0ZM28 4C29.1046 4 30 4.89543 30 6V7H2V6C2 4.89543 2.89543 4 4 4H28ZM30 28V8.5H2V28C2 29.1046 2.89543 30 4 30H28C29.1046 30 30 29.1046 30 28Z"
          fill="white"
        />
      </svg>
      <div className="w-[89px] h-[33px]">
        <p className="absolute left-[81px] top-[26px] text-2xl font-bold text-center text-white">
          이십사시
        </p>
      </div>
    </>
  );
}
