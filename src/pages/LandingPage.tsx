import { Plus, RotateCcw, Upload } from 'lucide-react';

interface LandingPageProps {}

function LandingPageButton(text: string, Icon: any) {
    return (
        <button className='group w-30 h-30 border-5 border-sky-500 rounded-[4rem] flex flex-col items-center justify-center hover:rounded-lg hover:h-36 transition-all duration-300 *:transition-all *:duration-300 *:absolute'>
            <Icon
                color={'#0ea5e9'}
                strokeWidth={2}
                className='w-15 h-15 group-hover:-translate-y-6'
            />
            <p className='translate-y-13 w-25 opacity-0 text-sky-500 text-lg/5 font-bold group-hover:translate-y-8 group-hover:opacity-100'>
                {text}
            </p>
        </button>
    );
}

function LandingPage(landingPageProps: LandingPageProps) {
    return (
        <div className='w-full h-full flex flex-col items-center justify-center gap-10'>
            <div className='flex gap-5'>
                {LandingPageButton("New Project", Plus)}
                {LandingPageButton("Browse Recent", RotateCcw)}
                {LandingPageButton("Import From File", Upload)}
            </div>
        </div>
    );
}

export default LandingPage;
