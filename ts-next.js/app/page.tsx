import User from "@/components/user";


export default function Home() {
  return (
    <section>
      <User
        name='Ruslan'
        age={26}
      // isDeveloper={true} 
      />
      {/* <User>
        <p>These are children</p>
      </User> */}
    </section>
  )
}
