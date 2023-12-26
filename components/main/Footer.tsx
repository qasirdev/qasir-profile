import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
			<div className="w-full flex flex-col items-center justify-center m-auto">
				<div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
					{/* <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
							<div className="font-bold text-[16px]">Community</div>
							<p className="flex flex-row items-center my-[15px] cursor-pointer">
									<FaYoutube />
									<span className="text-[15px] ml-[6px]">Youtube</span>    
							</p>
							<p className="flex flex-row items-center my-[15px] cursor-pointer">
									<RxGithubLogo />
									<span className="text-[15px] ml-[6px]">Github</span>    
							</p>
							<p className="flex flex-row items-center my-[15px] cursor-pointer">
									<RxDiscordLogo />
									<span className="text-[15px] ml-[6px]">Discord</span>    
							</p>
					</div> */}
					<div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
							<div className="font-bold text-[16px]">Social Media</div>
							<p className="flex flex-row items-center my-[15px] cursor-pointer">
									<RxGithubLogo />
									<span className="text-[15px] ml-[6px]">
										<a target='_blank' href={'https://github.com/qasirdev'} className='hover:opacity-80'>
											Github
										</a>
									</span>
							</p>
							<p className="flex flex-row items-center my-[15px] cursor-pointer">
									<RxDiscordLogo />
									<span className="text-[15px] ml-[6px]">
										<a target='_blank' href={'https://www.linkedin.com/in/qasir/'} className='hover:opacity-80'>
										Linkedin
										</a>
									</span>
							</p>
					</div>
					<div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
							<div className="font-bold text-[16px]">Contact me</div>
							<p className="flex flex-row items-center my-[15px] cursor-pointer">						
									<a className="text-[15px] ml-[6px]" href="mailto:hello@qasir.co.uk,qasirdev@gmail.com">hello@qasir.co.uk</a>    
							</p>
							<p className="flex flex-row items-center my-[15px] cursor-pointer">						
									<a className="text-[15px] ml-[6px]" href="mailto:qasirdev@gmail.com,hello@qasir.co.uk">qasirdev@gmail.com</a>    
							</p>
					</div>
				</div>

				<div className="mb-[20px] text-[15px] text-center">
						&copy; Qasir Dev 2023 . All rights reserved
				</div>
			</div>
    </div>
  )
}

export default Footer