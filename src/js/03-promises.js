import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  let delay = e.currentTarget.delay.valueAsNumber;
  const step = e.currentTarget.step.valueAsNumber;
  const amount = e.currentTarget.amount.valueAsNumber;

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
    delay += step;
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);

    // return promise;
  });

  // promise
  //   .then(({ position, delay }) => {
  //     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  //   })
  //   .catch(({ position, delay }) => {
  //     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  //   });
}
