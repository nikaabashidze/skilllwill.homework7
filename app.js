

const condition=document.getElementById('condition')
const functions=document.getElementById('functions')
const window1=document.getElementById('window1')
const window2=document.getElementById('window2')
const window3=document.getElementById('window3')
const homework1=document.getElementById('homework1')
const function1 = document.getElementById('function1');
const condition1 = document.getElementById('condition1');



//////// HOMEEWORK 1

                                                             
const mySetTimeout = (delay) => {

    return new Promise((resolve, ) => {
      setTimeout(() => {
        resolve()
      }, delay);
    })
  }
  
 
  mySetTimeout(2000)
    .then(() => {
      console.log("Ready")
    })
    .catch((error) => {
      console.error(error);
    })
















    homework1.addEventListener('click', function() {
    
    
        gsap.from('.condition ', {duration:1, x: '30vw', delay: 0, ease: 'slow(0.7, 0.7, false)'})
        gsap.from('.functions ', {duration:1, x: '-30vw', delay: 0, ease: 'slow(0.7, 0.7, false)'})
    
    
      
        condition.style.display = 'block';
        functions.style.display = 'block';
        window1.style.display = 'block';
        window2.style.display = 'none';
        window3.style.display = 'none';
    
        
        function1.style.display = 'block';
        function2.style.display = 'none';
        function3.style.display = 'none';
        
        condition1.style.display = 'block';
        condition2.style.display = 'none';
        condition3.style.display = 'none';
        
      
        
    });   




// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////

const homework2=document.getElementById('homework2')
const function2 = document.getElementById('function2');















// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////

//                                                    



const homework3=document.getElementById('homework3')
const function3 = document.getElementById('function3');
const container = document.getElementById('container')
const cont = document.getElementById('cont')


const back = document.getElementById('back')



             //HOMEEWORK 2



///////////home 2 




/////Toymaker   // promise - then, catch

    const makeToys = (maketime) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (Math.random() > 0.0) {
                    resolve('toy is ready');
                } 
            }, maketime * 1000);
        });
    };

 const deliveryToy = (delivery, deliverytime) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (delivery === 'toy is ready') {
                    resolve('toy is delivered');
                }
            }, deliverytime * 1000);
        });
    };

        const sellToys = (status, selltime) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    if (status === 'toy is delivered') {
                        resolve('toy has been sold ✔');
                    }
                }, selltime * 1000);
            });
        };

const startmaking = () => {

    const startButton = document.getElementById('startButton');

    document.getElementById('resultMake').innerText = '';
    document.getElementById('resultDelivery').innerText = '';
    document.getElementById('resultSell').innerText = '';

    const carElement = document.getElementById('car');
    carElement.style.marginTop = '0';


    const maketime = parseInt(document.getElementById('maketime').value, 10);
    const deliverytime = parseInt(document.getElementById('deliverytime').value, 10);
    const selltime = parseInt(document.getElementById('selltime').value, 10);


    if (isNaN(maketime) || isNaN(deliverytime) || isNaN(selltime)) {
        alert('Please enter numbers for start');
        return;
    }



    startButton.style.display = 'none';


    makeToys(maketime)
    .then((delivery) => {
        console.log('toy is ready');
        document.getElementById('resultMake').innerText = 'Toy is ready ✔';

        carElement.classList.remove('move-animation');
        carElement.style.animationDuration = `${deliverytime}s`;
        void carElement.offsetWidth;
        carElement.classList.add('move-animation');


        return deliveryToy(delivery, deliverytime);
    })
    .then((status) => {
        console.log('toy is delivered');
        document.getElementById('resultDelivery').innerText = 'Toy is delivered ✔';
        return sellToys(status, selltime);
    })
    .then((res) => {
        console.log(res);
        document.getElementById('resultSell').innerText = res;
        startButton.style.display = 'block';
    })
    .catch((err) => {
        console.log(err);
        if (startButton) {
            startButton.style.display = 'block'; 
        }
    });
};










///////////////////////////////////////////////////////////////////////////
////////////////////////Async Await syntax




// const makeToys = async (maketime) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (Math.random() > 0.0) {
//                 resolve('toy is ready');
//             } 
//         }, maketime * 1000);
//     });
// };

// const deliveryToy = async (delivery, deliverytime) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (delivery === 'toy is ready') {
//                 resolve('toy is delivered');
//             } 
//         }, deliverytime * 1000);
//     });
// };

// const sellToys = async (status, selltime) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (status === 'toy is delivered') {
//                 resolve('toy has been sold ✔');
//             } 
//         }, selltime * 1000);
//     });
// };

// const startmaking = async () => {
//     const startButton = document.getElementById('startButton');
//     document.getElementById('resultMake').innerText = '';
//     document.getElementById('resultDelivery').innerText = '';
//     document.getElementById('resultSell').innerText = '';
//     const carElement = document.getElementById('car');
//     carElement.style.marginTop = '0';
    
//     const maketime = parseInt(document.getElementById('maketime').value, 10);
//     const deliverytime = parseInt(document.getElementById('deliverytime').value, 10);
//     const selltime = parseInt(document.getElementById('selltime').value, 10);

//     if (isNaN(maketime) || isNaN(deliverytime) || isNaN(selltime)) {
//         alert('Please enter numbers for start');
//         return;
//     }

//     startButton.style.display = 'none';

//     try {
//         const delivery = await makeToys(maketime);
//         console.log('toy is ready');
//         document.getElementById('resultMake').innerText = 'Toy is ready ✔';

//         carElement.classList.remove('move-animation');
//         carElement.style.animationDuration = `${deliverytime}s`;
//         void carElement.offsetWidth;
//         carElement.classList.add('move-animation');

//         const status = await deliveryToy(delivery, deliverytime);
//         console.log('toy is delivered');
//         document.getElementById('resultDelivery').innerText = 'Toy is delivered ✔';

//         const res = await sellToys(status, selltime);
//         console.log(res);
//         document.getElementById('resultSell').innerText = res;
//     } catch (err) {
//         console.log(err);
//         if (startButton) {
//             startButton.style.display = 'block';
//         }
//     } finally {
//         startButton.style.display = 'block';
//     }
// };





homework3.addEventListener('click', function() {



    back.style.display = 'block';
   
    homework1.style.display = 'none';
    homework3.style.display = 'none';



    container.style.height = '5%';
    container.style.width = '100%';
    cont.style.height = '100%';
    cont.style.width = '100%';
    back.style.marginTop = '0';
    window3.style.height = '85%'
    back.firstElementChild.style.width = '10%';



    condition.style.display = 'none';
    functions.style.display = 'none';


    window1.style.display = 'none';
    window3.style.display = 'block';

});

//////////////////////////////////////////////////









    
   




    
   

























// ///////////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////////////////////////////////////


















