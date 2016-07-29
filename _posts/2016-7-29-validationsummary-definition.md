---
layout: post
title: ValidationSummary does not contain a definition for ValidationSummary - ASP.NET Core
---

If you are getting the error "ValidationSummary does not contain a definition for ValidationSummary", that's because the namespace that includes ValidationSummary is already included.
All you have to do is delete the part that says Validation summary.

For instance, asp-validation-summary="ValidationSummary.ModelOnly" would be asp-validation-summary="ModelOnly".

Happy Hacking!
