import accordionWaist from '../assets/img/Accordion_Waist_Strap.jpg';
import bellcordion from '../assets/img/Bellcordion_120_bass.webp';
import garmoshka from '../assets/img/Garmoshka_Russian.webp';
import hohnerDiatonic from '../assets/img/Hohner_Diatonic.webp';
import lombardi from '../assets/img/Lombardi_12_bass.webp';
import paoloSoprani from '../assets/img/Paolo_Soprani.webp';
import russiaButton from '../assets/img/Russia_Button.webp';

export const PRODUCTS = [
    {
        id: 0,
        name: 'Accordion Waist Strap',
        image: accordionWaist,
        price: 60.00,
        featured: false,
        description:
            'This individually tailored Accordion Waist Strap removes the weight from your shoulders, resting the accordions wait on your hips, like a hiking back pack. Some installation is required',
        inStock: false, 
    },
    {
        id: 1,
        name: 'Bellcordion 120 Bass',
        image: bellcordion,
        price: 1000.00,
        featured: true,
        description:
            `This beautiful 1950's 120 bass Bellcordion has a 4/3 reed configuration and comes with a dry Italian tuning with just a hint of a tremolo. There are 10 treble register variations with a palm master switch. The bass side has 4 register settings.

            We have done a thorough cleaning, some repair work, and an inspection, including checking every button and key, being sure to check each note with the reed block out and in the accordion. This accordion, with only one previous owner, is a high quality instrument. It has hand made reeds, a palm switch, and comes with a hard case.
            
            Feel free to contact us at 415-596-5952 with any questions you may have about this instrument.`,
        inStock: false, 
    },
    {
        id: 2,
        name: 'Garmoshka Russian Button Accordion',
        image: garmoshka,
        price: 200.00,
        featured: false,
        description:
            'Straight out of the old USSR, this diatonic box comes in the key of F#.',
        inStock: false, 
    },
    {
        id: 3,
        name: 'Hohner Diatonic Button Box',
        image: hohnerDiatonic,
        price: 975.00,
        featured: false,
        description:
            'This A/D diatonic Button Box has been waxed and tuned. Perfect for the inevitable late night sea shanties.',
        inStock: false, 
    },
    {
        id: 4,
        name: 'Lombardi 12 Bass Student Model Accordion',
        image: lombardi,
        price: 879.95,
        featured: false,
        description:
            'This accordion has been cleaned, waxed, and tuned. Comes with a 3 month warranty.',
        inStock: false, 
    },
    {
        id: 5,
        name: 'Used Paolo Soprani 120 Bass Professional Model',
        image: paoloSoprani,
        price: 1900.00,
        featured: false,
        description:
            `This accordion has a beautiful LMMM French Musette, 8 treble settings with a master switch, 2 bass settings, and a mute.

            https://youtu.be/FvrAj_rjazg`,
        inStock: false, 
    },
    {
        id: 6,
        name: 'Russia Button Accordion',
        image: russiaButton,
        price: 500.00,
        featured: false,
        description:
            `This Russian folk instruments will be there with bells on.`,
        inStock: false, 
    },
]