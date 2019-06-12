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

const { firstname, lastname, age } = useHookie(initial_state, useState)

```
