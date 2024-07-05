import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`font-semibold flex flex-row items-center leading-none text-white gap-2`}
    >
      <GlobeAltIcon width={30} height={30} />
      <p className="text-xl hidden  md:inline " >InoVasCMS</p>
    </div>
  );
}
