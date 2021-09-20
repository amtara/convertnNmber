
export default function InputConvert(props) {
    return (
      <div className="flex flex-col justify-center ">
           <label class="block text-black  text-2xl mb-2" for="number">
       Veuillez tapper votre nombre en chiffre arabe
      </label>
          <form className="bg-white shadow-md  px-8 pt-6 pb-8 mb-4">
          <input
            type="text"
            name="email"
            id="email"
            onChange={props.onChange}
            className=" appearance-none border rounded w-full py-2 px-3 text-gray-700  text-center leading-tight focus:outline-none focus:shadow-outline"
            placeholder="10"
          />
          </form>
  
      </div>
    )
  }