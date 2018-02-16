<%--
  Created by IntelliJ IDEA.
  User: sw
  Date: 2018-02-14
  Time: 오후 9:21
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>


<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../../../favicon.ico">


    <%--=================================================================================
    ================================jsp url declaration==============================--%>

    <c:url var="bootstrapCssUrl" value="/webjars/bootstrap/css/bootstrap.css"></c:url>
    <c:url var="bootstrapJsUrl" value="/webjars/bootstrap/js/bootstrap.js"></c:url>
    <c:url var="jqueryUrl" value="/webjars/jquery/jquery.js"></c:url>
    <c:url var="fontawesomeUrl" value="/webjars/font-awesome/font-awesome.css"></c:url>
    <c:url var="mainUrl" value="/public/css/main.css"></c:url>

    <!-- Custom styles for this template -->
    <link href="${mainUrl}" rel="stylesheet">
    <%--=================================================================================--%>
    <!-- Bootstrap core CSS -->
    <%--<script href="${fontawesomeUrl}" rel="stylesheet" ></script>--%>
    <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
    <link href="${bootstrapCssUrl}" rel="stylesheet">

</head>

<body>
<div class="nav-wrapper d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 text-white border-bottom box-shadow fixed-top">
    <h5 class="my-0 mr-md-auto font-weight-normal"><i class="fa fa-reddit"></i>&nbsp;Springboot Project</h5>
    <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 btn btn-outline-light" href="#">Home</a>
        <a class="p-2 btn btn-outline-light" href="#">Journal</a>
    </nav>
    <a class="btn btn-outline-secondary" href="#">Sign up</a>
</div>
