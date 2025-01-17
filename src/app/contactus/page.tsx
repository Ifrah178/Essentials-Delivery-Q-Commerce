export default function ContactUs() {
    return (
      <div className="container mx-auto py-16 px-6">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          Reach out to us for any queries or support.
        </p>
        <form>
          <input
            type="text"
            placeholder="Your Name"
            className="block w-full mb-4 px-4 py-2 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="block w-full mb-4 px-4 py-2 border rounded"
          />
          <textarea
            placeholder="Your Message"
            className="block w-full mb-4 px-4 py-2 border rounded"
            rows={5}
          ></textarea>
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
            Submit
          </button>
        </form>
      </div>
    );
  }
  