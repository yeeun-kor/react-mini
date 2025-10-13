import { useAuth } from '@/supabase/authUser';
import { UserCircleIcon } from '@heroicons/react/16/solid';

export default function MyPage() {
  //!유저 데이터 받아오기
  const { user } = useAuth();
  const userMeta = user?.user_metadata;
  // 유저이름 확인

  return (
    <div className="flex flex-col items-center justify-center">
      {userMeta.avatar_url ? (
        <img
          className="h-14 w-14 rounded-full"
          src={userMeta.avatar_url}
          alt="카카오톡 프로필 사진 "
        ></img>
      ) : (
        <UserCircleIcon aria-hidden="true" className="size-12 text-gray-300" />
      )}
      <h3 className="text-xl font-semibold">{userMeta.full_name}</h3>
    </div>
  );
}
