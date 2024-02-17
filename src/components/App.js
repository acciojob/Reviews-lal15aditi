import React, { useState } from 'react'

const allReviews = [
    {
        id: 1,
        name: 'susan smith',
        job: 'web developer',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: 'anna johnson',
        job: 'web designer',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',
        text:
            'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
        id: 3,
        name: 'peter jones',
        job: 'intern',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        text:
            'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
        id: 4,
        name: 'bill anderson',
        job: 'the boss',
        image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        text:
            'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
];
const App = () => {
    const [index, setIndex] = useState(0)
    function next() {
        if (index == allReviews.length - 1) setIndex(0)
        else setIndex(index + 1)
    }
    function prev() {
        if (index == 0) setIndex(allReviews.length-1)
        else setIndex(index - 1)
    }
    function random() {
        let random
        do {
            random = Math.floor(Math.random() * allReviews.length)
        }
        while (random == index)
        console.log(random)
        setIndex(random)
    }
    return (
        <div id='main' >
            <h1 id="review-heading">Our Reviews</h1>
            <div className="review">
                <h3 className='author' id={`author-${allReviews[index].id}`} >{allReviews[index].name}</h3>
                <p className='job' >{allReviews[index].job}</p>
                <p className='info' >{allReviews[index].text}</p>
                <img height={"200px"} src={allReviews[index].image} alt="" className='person-img' />
                <button className='prev-btn' onClick={prev}>Previous</button>
                <button className='next-btn' onClick={next}>Next</button>
                <button className='random-btn' onClick={random} >surprise me</button>
            </div>
        </div>
    )
}

export default App
