## Want a hookie? 🍪

#### Cleaning up react hooks

From:
```typescript
const [firstname, setFirstname] = useState('Elon');
const [lastname, setLastname] = useState('Musk');
const [age, setAge] = useState(47);
```

To:
```typescript
const initial_state = {
    firstname: 'Elon',
    lastname: 'Musk',
    age: 47
}

const { firstname, lastname, age } = useHookie(initial_state, useState);
```

Extras:
```typescript
const initial_state = {
    firstname: 'Elon',
    lastname: 'Musk',
    age: {
        _: 47,
        onSet(value, state) {
            console.log(`I am ${value} years old.`)
        }
    },
    bio: '',
    onSet({ firstname, lastname, age, bio }) {
        bio.set(`Hi, I'm ${firstname} ${lastname} and I'm ${age}.`)
    }
}

const { firstname, lastname, age, bio } = useHookie(initial_state, useState);


```
