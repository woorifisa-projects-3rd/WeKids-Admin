import { signIn } from "@/auth";
import CustomButton from "./CustomButton";

export default function LoginForm() {
  return (
    <div className="flex flex-col w-full justify-center items-center">
      <div className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
        관리자 페이지 로그인
      </div>

      <div className="mt-10">
        <form
          action={async (formData) => {
            "use server";
            await signIn("credentials", formData);
          }}
          className="space-y-6"
        >
          <div>
            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div>
            <CustomButton>로그인</CustomButton>
          </div>
        </form>
      </div>
    </div>
  );
}
