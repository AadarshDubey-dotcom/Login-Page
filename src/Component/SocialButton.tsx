import Button from "./Button";
import { GoogleIcon, GitHubIcon, FacebookIcon, EmailIcon, XIcon2, AppleIcon, MicrosoftIcon, SlackIcon, LinkedInIcon } from "./icons";
const SocialButton = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-8">
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap items-center justify-center gap-4">      
          <Button text="Continue with Google" variant="outline" iconLeft={<GoogleIcon />} />
          <Button text="Continue with GitHub" variant="outline" iconLeft={<GitHubIcon />} />
          <Button text="Login with Facebook" variant="outline" iconLeft={<FacebookIcon />} />
          <Button text="Login with LinkedIn" variant="outline" iconLeft={<LinkedInIcon />} />
        </div>
      </div>
    </div>
  );
};
export default SocialButton;