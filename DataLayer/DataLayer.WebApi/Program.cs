using DataLayer.Interfaces;
using DataLayer.Repository.Memory;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<IRepository, MemoryRepository>();
builder.Services.AddCors(setup =>
    {
        setup.AddPolicy("allow", pol =>
        {
            pol.AllowAnyOrigin();
            pol.AllowAnyHeader();
            pol.AllowAnyMethod();
        });
    });
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
//app.UseHttpsRedirection();
app.UseCors("allow");
app.UseStaticFiles();
app.MapControllers();
app.Run();


            