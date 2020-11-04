/*OBSERVER - MESSENGER*/
class Observer {
  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber);
  }

  notify(model) {
    this.subscribers.forEach((subscriber)=>{
      subscriber.notify(model);
    })
  }
}

/*MODEL*/
class NumberMaster extends Observer{
  constructor() {
    super();
    this.value = 0;
  }

  increment() {
    this.value++;
    this.notify(this);
  }
}

/*SUBSCRIBERS - RECEPTORS*/
class SpanishNumber {
  notify(model){
    console.log("incrementando el numero es español a: " + model.value);
  }
}

class EnglishNumber {
  notify(model){
    console.log("increment number in english to: " + model.value);
  }
}




const number = new NumberMaster();
/* Phase 1: subscription
* Here classes are going to subscribe in order to be notified
* in the future.
*/
number.subscribe(new SpanishNumber());
number.subscribe(new EnglishNumber());
/* Fase 2: notificacion
* Here subscribed class are notified because of the increment of the
* value.
* */
number.increment();
number.increment();
number.increment();
