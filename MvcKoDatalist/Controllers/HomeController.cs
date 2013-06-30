using Glimpse.Core.Tab;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcKoDatalist.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            System.Diagnostics.Trace.Write("Entered Index Action", "HomeController");
            System.Diagnostics.Trace.TraceInformation("Adding some Trace Info", "HomeController");
            System.Diagnostics.Trace.TraceWarning("Warning: May explode anytime");
            ViewBag.Message = "Modify this template to jump-start your ASP.NET MVC application.";
            System.Diagnostics.Trace.TraceError("Boom Boom");
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
    }
}
