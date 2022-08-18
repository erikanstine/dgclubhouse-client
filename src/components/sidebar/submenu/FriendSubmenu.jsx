import Friend from "../../friend/Friend";

export default function FriendSubmenu({users}) {
  return (
    <ul className='sidebarSubmenu'>
      {users.map((u) => (
        <Friend key={u.id} user={u} />
      ))}
    </ul>
  );
}
